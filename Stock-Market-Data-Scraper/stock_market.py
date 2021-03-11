import yfinance as yf
import shutil
columns = shutil.get_terminal_size().columns
print('\n')
print('Welcome to STOCK MARKET DATA SCRAPER \n\n'.center(columns))
ticker_symbol = input(
    'NOTE: Head over to http://bit.do/global_stock_exchange to find the ticker symbol of desired company \n\nEnter the ticker symbol: ')
start_date = input('Enter Start date in YYYY-MM-DD form: ')
end_date = input('Enter Start date in YYYY-MM-DD form: ')
period = input('Enter the period or interval(in days): ')
if (period == ''):
    period = 1

tickerSymbol = '{}'.format(ticker_symbol)

tickerData = yf.Ticker(tickerSymbol)
tickerDf = tickerData.history(period='{}d'.format(
    period), start='{}'.format(start_date), end='{}'.format(end_date))

# see your data

stock_info = tickerData.info
print("Name : {}".format(stock_info['shortName']).center(columns))
print("Country : {}".format(stock_info['country']).center(columns))
print("Industry : {}".format(stock_info['industry']).center(columns))
print("Website : {}".format(stock_info['website']).center(
    columns))
print("Currency : {}".format(stock_info['currency']).center(columns))
print("Timezone : {}\n".format(
    stock_info['exchangeTimezoneShortName']).center(columns))
print(tickerDf)
