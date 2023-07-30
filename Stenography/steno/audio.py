# wave module comes with standard python installation
import wave
from steno import database as db

"""
*<[only supports wave files]>*
This module helps us in performing audio stenography
on wave files as they are lossless audio files.
link -  https://tinyurl.com/yy3sx6ku
"""


def embed(infile: str, message: str, outfile: str):
    # TODO add password functionality preferably using encryption
    """This takes your message and hides it in infile and saves it in outfile"""
    song = wave.open(infile, mode="rb")
    # Read frames and convert to byte array
    frame_bytes = bytearray(list(song.readframes(song.getnframes())))

    # Append dummy data to fill out rest of the bytes. Receiver shall detect and remove these characters.
    message = message + int((len(frame_bytes) - (len(message) * 8 * 8)) / 8) * "#"
    # Convert text to bit array
    bits = list(
        map(int, "".join([bin(ord(i)).lstrip("0b").rjust(8, "0") for i in message]))
    )

    # Replace LSB of each byte of the audio data by one bit from the text bit array
    for i, bit in enumerate(bits):
        frame_bytes[i] = (frame_bytes[i] & 254) | bit
    frame_modified = bytes(frame_bytes)

    # Write bytes to a new wave audio file
    with wave.open(outfile, "wb") as fd:
        fd.setparams(song.getparams())
        fd.writeframes(frame_modified)
    song.close()
    db.format_oth("aud", outfile)


def extract(file: str):
    """This function takes the filepath and decodes the hidden data and returns it"""
    song = wave.open(file, mode="rb")
    # Convert audio to byte array
    frame_bytes = bytearray(list(song.readframes(song.getnframes())))
    # Extract the LSB of each byte
    extracted = [frame_bytes[i] & 1 for i in range(len(frame_bytes))]
    # Convert byte array back to string
    message = "".join(
        chr(int("".join(map(str, extracted[i : i + 8])), 2))
        for i in range(0, len(extracted), 8)
    )
    # Cut off at the filler characters
    decoded = message.split("###")[0]
    song.close()
    return decoded
