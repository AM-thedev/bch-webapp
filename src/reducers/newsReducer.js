import newsService from '../services/news'


const newsReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action: ', action)
  switch(action.type) {
    case 'NEWS': {
      const news = action.data
      return news
    }
    default:
      return state
  }
}

export const displayNews = () => {
  return async dispatch => {
    const currentNews = await newsService.getNews()

    // DOMParser might have compatibility issues with very old versions of Internet Explorer
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(currentNews, "text/xml");

      // get the first 4 story titles
      const xmlTitles = xmlDoc.evaluate( '/rss/channel/item[position() <= 4]/title/text()', xmlDoc.documentElement)
      const titles = []
      let title = xmlTitles.iterateNext()
      while (title) {
        titles.push(title.data)
        title = xmlTitles.iterateNext()
      }

      // get the first 4 story links
      const xmlLinks = xmlDoc.evaluate('/rss/channel/item[position() <= 4]/link/text()', xmlDoc.documentElement)
      const links = []
      let link = xmlLinks.iterateNext()
      while (link) {
        links.push(link.data)
        link = xmlLinks.iterateNext()
      }

      const newsArray = [
        {
          title: titles[0],
          url: links[0]
        },
        {
          title: titles[1],
          url: links[1]
        },
        {
          title: titles[2],
          url: links[2]
        },
        {
          title: titles[3],
          url: links[3]
        }
      ]

    dispatch ({
      type: "NEWS",
      data: newsArray
    })
  }
}

export default newsReducer