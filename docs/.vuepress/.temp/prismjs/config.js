import "/Users/caoyudan/Documents/project/note/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/base.css"
import "/Users/caoyudan/Documents/project/note/vuepress-starter/node_modules/@vuepress/plugin-prismjs/lib/client/styles/nord.css"
import "/Users/caoyudan/Documents/project/note/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/line-numbers.css"
import "/Users/caoyudan/Documents/project/note/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-highlight.css"
import "/Users/caoyudan/Documents/project/note/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/collapsed-lines.css"
import { setupCollapsedLines } from "/Users/caoyudan/Documents/project/note/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/index.js"

export default {
  setup() {
    setupCollapsedLines()
  }
}
