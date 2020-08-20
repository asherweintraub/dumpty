const {DateTime} = require('luxon')
const JSON5 = require('json5')

module.exports = function(eleventyConfig) {

  eleventyConfig.addShortcode("betterDate", function(inDate, format) {
    return DateTime.fromJSDate(inDate).toFormat(format);
  });

  eleventyConfig.addFilter("iconPick", function(type) {
    if (type == 'book') {return 'fa-book';}
    else if (type == 'doc') {return 'fa-file-alt';}
    else if (type == 'clip') {return 'fa-film';}
    else if (type == 'vid') {return 'fa-video';}
    else if (type == 'vid2') {return 'fa-file-video';}
    else if (type == 'lecture') {return 'fa-chalkboard-teacher';}
    else if (type == 'other') {return 'fa-external-link-square-alt';}
    else {return;};
  });


  eleventyConfig.addCollection("tagList", collection => {
    const tagsSet = new Set();
    collection.getAll().forEach(item => {
      if (!item.data.tags) return;
      item.data.tags
        .forEach(tag => tagsSet.add(tag));
    });

    return Array.from(tagsSet).sort();
  });

  eleventyConfig.addDataExtension("json5", contents => JSON5.parse(contents));

  eleventyConfig.addPassthroughCopy("_redirects");

  return {
    dir: {
      input: "_src"
    }
  };
};
