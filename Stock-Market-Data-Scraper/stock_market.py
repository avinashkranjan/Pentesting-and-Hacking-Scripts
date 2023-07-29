import yfinance as yf
import shutil


def get_input(message):
    """Get user input with error handling."""
    while True:
        try:
            user_input = input(message)
            return user_input.strip()
        except KeyboardInterrupt:
            print("\nProgram terminated by user.")
            exit(0)


def validate_date(date_str):
    """Validate date format."""
    try:
        datetime.datetime.strptime(date_str, "%Y-%m-%d")
        return True
    except ValueError:
        return False


def validate_positive_integer(value):
    """Validate positive integer input."""
    try:
        value = int(value)
        if value > 0:
            return True
    except ValueError:
        pass
    return False


def retrieve_stock_data(ticker_symbol, start_date, end_date, period):
    """Retrieve stock market data."""
    try:
        tickerData = yf.Ticker(ticker_symbol)
        tickerDf = tickerData.history(
            period="{}d".format(period),
            start="{}".format(start_date),
            end="{}".format(end_date),
        )
        return tickerData, tickerDf
    except Exception as e:
        print("An error occurred while retrieving stock market data:", str(e))


def print_stock_info(stock_info):
    """Print stock information."""
    columns = shutil.get_terminal_size().columns
    print("Name : {}".format(stock_info["shortName"]).center(columns))
    print("Country : {}".format(stock_info["country"]).center(columns))
    print("Industry : {}".format(stock_info["industry"]).center(columns))
    print("Website : {}".format(stock_info["website"]).center(columns))
    print("Currency : {}".format(stock_info["currency"]).center(columns))
    print(
        "Timezone : {}\n".format(stock_info["exchangeTimezoneShortName"]).center(
            columns
        )
    )


def display_stock_data(stock_data):
    """Display stock market data."""
    columns = shutil.get_terminal_size().columns
    print(stock_data)


def main():
    print("\n")
    print(
        "Welcome to STOCK MARKET DATA SCRAPER \n\n".center(
            shutil.get_terminal_size().columns
        )
    )

    ticker_symbol = get_input(
        "NOTE: Head over to http://bit.do/global_stock_exchange to find the ticker symbol of the desired company \n\nEnter the ticker symbol: "
    )

    start_date = get_input("Enter Start date in YYYY-MM-DD form: ")
    while not validate_date(start_date):
        print("Invalid date format. Please enter the date in the format YYYY-MM-DD.")
        start_date = get_input("Enter Start date in YYYY-MM-DD form: ")

    end_date = get_input("Enter End date in YYYY-MM-DD form: ")
    while not validate_date(end_date):
        print("Invalid date format. Please enter the date in the format YYYY-MM-DD.")
        end_date = get_input("Enter End date in YYYY-MM-DD form: ")

    period = get_input("Enter the period or interval (in days): ")
    while not validate_positive_integer(period):
        print("Invalid period. Please enter a positive integer.")
        period = get_input("Enter the period or interval (in days): ")

    tickerSymbol = "{}".format(ticker_symbol)

    tickerData, tickerDf = retrieve_stock_data(
        tickerSymbol, start_date, end_date, period
    )
    if tickerData:
        stock_info = tickerData.info
        print_stock_info(stock_info)
        display_stock_data(tickerDf)


if __name__ == "__main__":
    main()
