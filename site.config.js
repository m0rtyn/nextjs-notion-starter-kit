module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '6153888c7b1d4a4e9475033cbb890098',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'So Meta',
  domain: 'someta.site',
  author: 'Martyn',

  // open graph metadata (optional)
  description: 'Статьи для осознания себя со стороны. Мышление, внимание, технологии, творечество, системы, планирование.',
  socialImageTitle: 'Такая Мета',
  socialImageSubtitle: '',

  // social usernames (optional)
  twitter: 'somartyn',
  github: 'm0rtyn',
  linkedin: 'martyns0n',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: 'm0rtyn/someta.comments',

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  pageUrlOverrides: {
    // '/no-more-qwerty': 'QWERTY-d137de069dde4e33a615705e1d25b140',
    '/how-to-telegram': '46178f7d27af48cdb010db70f6c98a28',
    '/martyn-talks': '782a5fea22a4480bba8bc7b38a6be099',
    '/sleep-deprivation-pandemic': '22b9a1e384e54d9f96efbde5d52f77b1',
    '/no-more-immortality': 'f5abb96118e74d23b134e5ddf6d92b4e',
    '/more-wrong': 'c7155f03b0d04987a88d9bbb589b8a98',
    '/derzhites': '3635e076096a4039b0c2a415a6c7bbf6',
    '/three-years-in-it': '57f077d58826459eb1fcece407629548',
    '/how-to-meditate': 'd761d8e61b894bc1b80b503bb016efad',
    '/project-wasted': 'Wasted-ab642de5de0441669ff60f5520e177cd',
    '/how-to-notion-plus-google-calendar': 'Notion-Google-Calendar-07e1131134a046a88d792741c5e3e1e7',
    '/meta-practics': '2440b28de52040128e5b8933d6850c82',
    '/the-smartest': '2b3dc668afe843b08b6a46da1a822ac7',
    '/about-evolution-drugs-and-success': 'ed3cb1e932314fa2a38c8efced992d9d',
    '/morning-deprivation': '8d5db95a969d492b9fa41c5b430dc0ee',
    '/timeblocking': 'cb4f49b93dcd4439a597cfb8b90064ac',
    '/shut-up-and-become-social': 'Shut-up-and-become-social-f5df4231ace94f50940f9435f754709e',
    '/how-to-smart-status-of-notion-project': 'Notion-1864c1b8c47a4aea8539a3750ee55c3f',
    '/consumption-manifest': '3fd526745e9b4b8380e320f8c42992cc',
    '/refusing': '510decd7cbe647ee9f9cc46d409f933e',
    '/about-martyn': '2cf42d7feb0141eeb82b25cb2c773537',
    '/about': 'f59b55e86351417586b9f142cb016c5e'
  }
}
