# dumpty

### dumpty is a super barebones eleventy template for dumping cool stuff.

**why '[dumpty](https://media.giphy.com/media/26gshxlHzZv9eNfdC/giphy.gif)'?**
dump + eleventy = [*dumpty*](https://media.giphy.com/media/3osxYpQ20pysGhUW08/giphy.gif)

You can view a live version of dumpty [here](https://dumpty.netlify.app/)

## Table of contents

- [Setup](#setup)
- [Config](#config)
- [Posting](#posting)
- [The End](#thats-it)

---

### Setup

1. Make sure eleventy's installed.
2. Clone this repo to an empty directory.
3. [Config](#Config)

### Config

Navigate to `_src/_data/config.json5` and open in your text editor of choice.

#### Options:

- `title`: (string), *this is the name of your site. will appear at the top of your browser window, as well as the page's header.*

- **font**

  - `fontlink`: (string), *when using a custom font, this is what comes after the 'href' in the supplied html.*

  - `fontname`: (string), *this is what css will use to reference your font. Make sure it matches what is provided by the foundry when setting up your webfont.*
  
- **list**
  - `showExample`: (bool), *show the example post?*
  - `showIcon`: (bool), *show type icons?*
  - `showName`: (bool), *show posts' names?*
  - `showDesc`: (bool), *show posts' descriptions?*
  - `showAuth`: (bool), *show posts' authors?*
  - `showTags`: (bool), *show posts' tags?*
  - `showDate`: (bool), *show posts' dates?*
  
- **date**
  
  - `dateFormat`: (string), *tells the page how to display dates. Use any code from [this list](https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens).*

- **post configuration**
  
  - `toPost`: (string)
  
- **icons:** *this is an array of all possible icons. currently only affects the key.*

  - {

    ​	`name`: (string), *what the key labels the icon as.*

    ​	`fa`: (string), *font awesome icon code. Can be any of [these](https://fontawesome.com/cheatsheet).*

    }
  
- **other**

  - `showKey`: (bool), *show icon key?*

### Posting

**This will be available in GUI form shortly, but for now posts must be made manually.**

Navigate to `_src/posts` and create a blank markdown file.

#### Front Matter

Front matter is a way to include data in a markdown file. This data is used by dumpty to properly display your post. It is not optional.

Front matter is contained in two sets of `---`'s.

*NOTE: by default this front matter uses YAML syntax. This means it is very human-friendly; however, **it is different from the config's syntax.** I'll change it if enough people complain.*

- `name`:  *your post's title.*

- `desc`:  *your post's descriptions*

- `link`: *where should your post redirect to (or display, if `toPost: true`)?*

- `author`: *who wrote this post / the linked content?*

- `tags`: *self-explanatory. expressed as a bulleted list (see `micronations.md` or `netlify.md` for a good example. Note: this does not have  to include 'posts', every post by default includes this tag.*

- `type`: *changes which icon is displayed. currently can be `book`, `doc` `clip`, `vid`, `vid2`, `lecture`, or `other`. I'll make these user-definable in the future.*

Example front matter (taken from micronations.md):
```YAML
---
name: micronations
desc: this post explains micronations and why they're cool
link: https://en.wikipedia.org/wiki/List_of_micronations
author:  Asher
tags:
  - micronations
  - cool
type: doc
---
```

### That's it!

With, eleventy installed, you'll be able to view a live version of your site using `--serve`.

If you know what you're doing, feel free to edit the css (`/_src/_includes/style.njk`), or even the eleventy config (`.eleventy.js`)