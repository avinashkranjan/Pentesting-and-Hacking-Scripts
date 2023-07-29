import os
import json
import datetime
import importlib
import random
import time

# Constants
kLabelDirInitFile = "_init.py"
kLabelDumpsterFireName = "DumpsterFire Name"
kLabelDumpsterFireDescription = "DumpsterFire Description"
kLabelDelayedIgnition = "Delayed Ignition"
kLabelDelayedIgnitionStartUTC = "Delayed Ignition Start (UTC)"
kDumpsterFireDirectory = "DumpsterFires/"

# Global variables
gFireCategories = []
gFires = []
gDumpsterFires = []


class DumpsterFire:
    def __init__(self):
        self.mName = ""
        self.mDescription = ""
        self.mLaunchDateTimeUTC = datetime.datetime.utcnow()
        self.mDelayLaunch = False
        self.mFires = []


class FireNode:
    def __init__(self):
        self.mFireName = ""
        self.mOffsetHours = 0
        self.mOffsetMinutes = 0
        self.mConfigStr = ""


def BrowseFires():
    PrintBannerFlames()
    print("---------------------------------------------------------------------")
    print("=========================   BROWSE FIRES   ==========================")
    print("---------------------------------------------------------------------")
    print()
    print("Fires are the individual action elements that make up a Dumpster Fire.")
    print()
    print("Select a Fire Category to view its member Fires and their descriptions.")
    print()

    done = False

    while not done:
        print()
        print("====  Select a Fire Category  ====")
        print()

        fireCategoryNum = SelectFireCategory()
        fireCategory = gFireCategories[fireCategoryNum]

        print("Selected Fire Category:", fireCategory)
        print()
        PrintBannerFlames()
        print("---------------------------------------------------------------------")
        print("                 ", fireCategory, "Fire Details")
        print("---------------------------------------------------------------------")
        print()

        # Clear values from list to avoid duplicate crud building up
        gFires.clear()

        # Populate the Fire modules from the supplied Fire Category
        for root, dirs, files in os.walk("./FireModules/" + fireCategory):
            for file in files:
                # Filter out the required __init__.py file in Fire directories
                if file != kLabelDirInitFile and file.endswith(".py"):
                    gFires.append(file)

        for fire in gFires:
            PrintFireDetails(fireCategory, fire)

        choice = input("Browse more Fires? [y/n]: ")

        if choice.lower() != "y":
            done = True


def PrintFireDetails(fireCategory, fireName):
    try:
        fullFirePath = fireCategory + "/" + fireName

        # Convert Fire's filepath to Python '.'-format
        pythFormatPathStr = fullFirePath.replace("/", ".")

        # Set root path to Fire modules, strip trailing ".py" from Fire module's name
        fireModulePathStr = "FireModules." + pythFormatPathStr[:-3]

        # Extract Fire name from end of converted Fire module path
        # Convert filepath of Fire module to Python's '.'-notation
        fireModulePathElementList = fireModulePathStr.split(".")
        fireModuleNameStr = fireModulePathElementList[-1]

    except Exception as e:
        print(
            "### PrintFireDetails(): Error accessing Fire details for",
            fireModuleNameStr,
        )
        print("Error:", str(e))
        print()

    try:
        # Load Fire module (Python class)
        currentFireClass = getattr(
            importlib.import_module(fireModulePathStr, fireModuleNameStr),
            fireModuleNameStr,
        )

        # Create dummy instance of Fire so we can call its Description() method
        thisFire = currentFireClass("")

    except Exception as e:
        print("### PrintFireDetails(): Error loading / creating new Fire")
        print("Module Path:", fireModulePathStr)
        print("Fire Name:", fireModuleNameStr)
        print("Error:", str(e))
        print()

    try:
        print("**", fireName)
        print()
        print("\t", thisFire.Description())
        print()

    except Exception as e:
        print("### IgniteFire: Error while calling Fire's Description()")
        print("Error:", str(e))
        print()


def StoreDumpsterFireConfig(theDumpsterFire):
    # Store theDumpsterFire in JSON format in our DumpsterFires/ directory
    rawConfigList = []

    try:
        configFilePath = os.path.join(
            kDumpsterFireDirectory, theDumpsterFire.mName + ".fyr"
        )
        with open(configFilePath, "w") as configFile:
            rawConfigList.append(theDumpsterFire.mName)
            rawConfigList.append(theDumpsterFire.mDescription)
            rawConfigList.append(
                theDumpsterFire.mLaunchDateTimeUTC.strftime("%m/%d/%Y %H:%M:%S")
            )
            rawConfigList.append(theDumpsterFire.mDelayLaunch)
            rawConfigList.append(len(theDumpsterFire.mFires))

            for fire in theDumpsterFire.mFires:
                rawConfigList.append(fire.mFireName)
                rawConfigList.append(fire.mOffsetHours)
                rawConfigList.append(fire.mOffsetMinutes)
                rawConfigList.append(fire.mConfigStr)

            json.dump(rawConfigList, configFile)

        print()
        print("** Successfully saved:", theDumpsterFire.mName)
        print()

    except Exception as e:
        print("### StoreDumpsterFireConfig: Error saving DumpsterFire config.")
        print("Error:", str(e))
        print()


def LoadDumpsterFireConfig(dumpsterFireFilePath):
    # Open DumpsterFire config file, read saved JSON format, and assign values to data members
    newDumpsterFire = DumpsterFire()

    try:
        with open(dumpsterFireFilePath, "r") as configFile:
            rawConfigList = json.load(configFile)

            newDumpsterFire.mName = rawConfigList[0]
            newDumpsterFire.mDescription = rawConfigList[1]
            newDumpsterFire.mLaunchDateTimeUTC = datetime.datetime.strptime(
                rawConfigList[2], "%m/%d/%Y %H:%M:%S"
            )
            newDumpsterFire.mDelayLaunch = rawConfigList[3]

            fireCount = rawConfigList[4]

            for i in range(fireCount):
                fire = FireNode()
                offset = i * 4

                fire.mFireName = rawConfigList[offset + 5]
                fire.mOffsetHours = rawConfigList[offset + 6]
                fire.mOffsetMinutes = rawConfigList[offset + 7]
                fire.mConfigStr = rawConfigList[offset + 8]

                newDumpsterFire.mFires.append(fire)

        return newDumpsterFire

    except Exception as e:
        print("### LoadDumpsterFireConfig: Error reading values from config file.")
        print("Error:", str(e))
        print()


def PrintDumpsterFireConfig(thisDumpsterFire):
    print()
    print("\t", kLabelDumpsterFireName, thisDumpsterFire.mName)
    print("\t", kLabelDumpsterFireDescription, thisDumpsterFire.mDescription)

    if not thisDumpsterFire.mDelayLaunch:
        print("\t", kLabelDelayedIgnition, "No")
    else:
        print("\t", kLabelDelayedIgnition, "Yes")
        print(
            "\t",
            kLabelDelayedIgnitionStartUTC,
            thisDumpsterFire.mLaunchDateTimeUTC.strftime("%x %X"),
        )

    print()
    print("\tFires (In order of execution):")
    print()

    for fire in thisDumpsterFire.mFires:
        print("\t**", fire.mFireName)
        print(
            "\t    Relative Time Delay (HH:MM):",
            str(fire.mOffsetHours).zfill(2) + ":" + str(fire.mOffsetMinutes).zfill(2),
        )
        print("\t    Config:", fire.mConfigStr)

    print()


def IgniteFire(modulePath, fireName, params):
    try:
        # Load Fire module (Python class)
        currentFireClass = getattr(
            importlib.import_module(modulePath, fireName), fireName
        )

        # Create instance of Fire, with parameters that were stored in parent DumpsterFire
        thisFire = currentFireClass("")

        thisFire.SetParameters(params)
        thisFire.Ignite()

    except Exception as e:
        print("### IgniteFire: Error while running Fire()")
        print("Error:", str(e))
        print()


def IgniteDumpsterFire(thisDumpsterFire, withUserInteraction):
    # If this DumpsterFire has delayed ignition, loop and wait until triggered
    if thisDumpsterFire.mDelayLaunch:
        print(
            "Delayed ignition selected. Standing by until UTC",
            thisDumpsterFire.mLaunchDateTimeUTC.strftime("%x %X"),
        )
        print()
        waitTime = thisDumpsterFire.mLaunchDateTimeUTC - datetime.datetime.utcnow()

        if waitTime.total_seconds() > 1:
            time.sleep(waitTime.total_seconds())

    print("Igniting Dumpster Fire...")
    print()

    # Loop through the member Fires of the DumpsterFire, igniting them in turn
    for fire in thisDumpsterFire.mFires:
        print("---------------------------------------------------------")
        PrintDateTimeStamps()
        print()

        # If this Fire has a relative delayed ignition, loop and wait until triggered
        if fire.mOffsetHours > 0 or fire.mOffsetMinutes > 0:
            print(
                "Delayed Fire ignition detected. Pausing for (HH:MM)",
                str(fire.mOffsetHours).zfill(2)
                + ":"
                + str(fire.mOffsetMinutes).zfill(2),
            )
            print("(Waiting...)")
            delaySeconds = (int(fire.mOffsetMinutes) * 60) + (
                int(fire.mOffsetHours) * 60 * 60
            )
            time.sleep(delaySeconds)
            print()
            PrintDateTimeStamps()
            print()

        print("Igniting Fire:", fire.mFireName)
        if fire.mConfigStr == "":
            print("Using ConfigStr: None")
        else:
            print("Using ConfigStr:", fire.mConfigStr)

        print()

        # Convert Fire's filepath to Python '.'-format
        pythFormatPathStr = (
            "FireModules." + thisDumpsterFire.mName + "." + fire.mFireName
        )

        # Ignite Fire module (Python class) using Fire module's path
        IgniteFire(pythFormatPathStr, fire.mFireName, fire.mConfigStr)

        print("Fire complete.")
        print()

    print("Dumpster Fire extinguished.")
    print()


def PrintDateTimeStamps():
    print("Local Time (HH:MM:SS):", datetime.datetime.now().strftime("%X"))
    print("UTC Time (HH:MM:SS):", datetime.datetime.utcnow().strftime("%X"))
    print()


def PrintBannerFlames():
    """


     /$$$$$$$                                                /$$                               /$$$$$$$$ /$$
    | $$__  $$                                              | $$                              | $$_____/|__/
    | $$  \ $$ /$$   /$$ /$$$$$$/$$$$   /$$$$$$   /$$$$$$$ /$$$$$$    /$$$$$$   /$$$$$$       | $$       /$$  /$$$$$$   /$$$$$$
    | $$  | $$| $$  | $$| $$_  $$_  $$ /$$__  $$ /$$_____/|_  $$_/   /$$__  $$ /$$__  $$      | $$$$$   | $$ /$$__  $$ /$$__  $$
    | $$  | $$| $$  | $$| $$ \ $$ \ $$| $$  \ $$|  $$$$$$   | $$    | $$$$$$$$| $$  \__/      | $$__/   | $$| $$  \__/| $$$$$$$$
    | $$  | $$| $$  | $$| $$ | $$ | $$| $$  | $$ \____  $$  | $$ /$$| $$_____/| $$            | $$      | $$| $$      | $$_____/
    | $$$$$$$/|  $$$$$$/| $$ | $$ | $$| $$$$$$$/ /$$$$$$$/  |  $$$$/|  $$$$$$$| $$            | $$      | $$| $$      |  $$$$$$$
    |_______/  \______/ |__/ |__/ |__/| $$____/ |_______/    \___/   \_______/|__/            |__/      |__/|__/       \_______/
                                      | $$
                                      | $$
                                      |__/"""


def SelectFireCategory():
    i = 0

    for fireCategory in gFireCategories:
        print("(", i, ") ", fireCategory, sep="")
        i += 1

    while True:
        try:
            num = int(input("Enter the number of the Fire Category: "))

            if num >= 0 and num < len(gFireCategories):
                break

            else:
                print("Invalid selection. Please try again.")

        except ValueError:
            print("Invalid selection. Please try again.")

    return num


# Sample usage
def main():
    print("Welcome to the DumpsterFire Toolset!")
    print()

    # Sample code to browse fires
    BrowseFires()

    # Sample code to create and ignite a dumpster fire
    dumpsterFire = DumpsterFire()
    dumpsterFire.mName = "MyDumpsterFire"
    dumpsterFire.mDescription = "A blazing example of DumpsterFire awesomeness"
    dumpsterFire.mDelayLaunch = True
    dumpsterFire.mLaunchDateTimeUTC = datetime.datetime.utcnow() + datetime.timedelta(
        minutes=5
    )

    fire1 = FireNode()
    fire1.mFireName = "MyFire1"
    fire1.mOffsetHours = 0
    fire1.mOffsetMinutes = 0
    fire1.mConfigStr = ""

    fire2 = FireNode()
    fire2.mFireName = "MyFire2"
    fire2.mOffsetHours = 0
    fire2.mOffsetMinutes = 1
    fire2.mConfigStr = ""

    dumpsterFire.mFires = [fire1, fire2]

    # Save the DumpsterFire configuration
    StoreDumpsterFireConfig(dumpsterFire)

    # Load the DumpsterFire configuration
    loadedDumpsterFire = LoadDumpsterFireConfig(
        kDumpsterFireDirectory + "MyDumpsterFire.fyr"
    )

    # Print the loaded DumpsterFire configuration
    PrintDumpsterFireConfig(loadedDumpsterFire)

    # Ignite the DumpsterFire
    IgniteDumpsterFire(loadedDumpsterFire, True)


if __name__ == "__main__":
    main()
