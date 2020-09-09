const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')
const markdownItTOC = require('markdown-it-table-of-contents')

const headerSlugify = (text) => {
  const cleaned = text.replace(/<\/?code>/g, '').replace(/(&lt;|&gt;|[<>])/g, '')
  return markdownItAnchor.defaults.slugify(cleaned)
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('favicon')
  eleventyConfig.addPassthroughCopy('images')
  eleventyConfig.addPassthroughCopy('styles')

  const markdownEngine = markdownIt({ html: true })

  markdownEngine.use(markdownItAnchor, {
    permalink: true,
    permalinkBefore: true,
    permalinkSymbol: '#',
    slugify: headerSlugify
  })
  markdownEngine.use(markdownItTOC, {
    includeLevel: [2],
    containerHeaderHtml: '<h2>Contents</h2>',
    slugify: headerSlugify
  })

  eleventyConfig.setLibrary('md', markdownEngine)

  return {
    dir: {
      input: '.',
      output: '_site'
    }
  }
}