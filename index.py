from lxml import html
import requests

#page = requests.get('http://econpy.pythonanywhere.com/ex/001.html')
page = requests.get('https://wss.target.com/selfservice/home/viewSchedule.do?RequestTypeSortOrder=desc&TMNameSortOrder=desc&DateEffectiveSortOrder=desc&DateSubmittedSortOrder=desc&APPROVER_ROLE=yes&USER_FLAG=true&TEAMID_FLAG=true&screenName=Home')

tree = html.fromstring(page.content)

#buyers = tree.xpath('//div[@title="buyer-name"]/text()')
#prices = tree.xpath('//span[@class="item-price"]/text()')
location = tree.xpath('//*[@id="page_content"]/table[1]/tbody/tr[1]/td/table[1]/tbody/tr[1]/td[2]/div[1]')


print 'location: ', location
#print 'Prices: ', prices