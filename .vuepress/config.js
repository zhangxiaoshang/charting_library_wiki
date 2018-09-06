var sidebar = [
  ['/wiki/Home', 'What is Charting Library'],
  {
    title: 'Getting Started',
    collapsable: false,
    children: [
      ['/wiki/Package-Content', 'Package Content'],
      ['/wiki/Running-Your-Charting-Library', 'Running Your Charting Library'],
      ['/wiki/Best-Practices', 'Best Practices'],
      ['/wiki/Frequently-Asked-Questions', 'Frequently Asked Questions']
    ]
  },
  {
    title: 'Data Binding',
    collapsable: false,
    children: [
      ['/wiki/How-To-Connect-My-Data', 'How To Connect My Data'],
      ['/wiki/JS-Api', 'JS Api'],
      ['/wiki/UDF', 'UDF'],
      ['/wiki/Symbology', 'Symbology'],
      ['/wiki/Trading-Sessions', 'Trading Sessions'],
      ['/wiki/Quotes', 'Quotes']
    ]
  },
  {
    title: 'Chart Customization',
    collapsable: false,
    children: [
      ['/wiki/Customization-Overview', 'Customization Overview'],
      ['/wiki/Widget-Constructor', 'a. Widget Constructor'],
      ['/wiki/Widget-Methods', 'b. Widget Methods'],
      ['wiki/Chart-Methods', 'c. Chart Methods'],
      ['/wiki/Featuresets', 'd. Featuresets'],
      ['/wiki/Customization-Overview#customization-done-through-data-stream', 'Server Side Customization'],
      ['/wiki/Customization-Use-Cases', 'Customization Use Cases']
    ]
  },
  {
    title: 'Trading Terminal',
    collapsable: false,
    children: [
      ['/wiki/Trading-Terminal', '1. Brief Intro'],
      ['/wiki/Broker-API', '2. Broker API'],
      ['/wiki/Trading-Host', '3. Trading Host'],
      ['/wiki/Account-Manager', '4. Account Manager'],
      ['/wiki/Trading-Objects-and-Constants', ' 5.Trading Objects and Constants'],
      ['/wiki/Saving-and-Loading-Charts', 'Saving/Loading Charts'],
      ['/wiki/Creating-Custom-Studies', 'Creating Custom Studies'],
      ['/wiki/Breaking-Changes', 'Breaking Changes In Version']
    ]
  }
]

module.exports = {
  base: '/charting_library_wiki/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Charting Library'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Charting Library'
    }
  },
  themeConfig: {
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        lastUpdated: 'Last Updated',
        sidebar: sidebar,
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        lastUpdated: '上次更新',
        sidebar: sidebar
      }
    }
  }
}
