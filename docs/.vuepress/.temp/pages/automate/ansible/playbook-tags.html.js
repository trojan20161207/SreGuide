export const data = {
  "key": "v-2e67ab09",
  "path": "/automate/ansible/playbook-tags.html",
  "title": "4.5 Playbook之tags",
  "lang": "zh-CN",
  "frontmatter": {
    "date": "2020-03-20T00:00:00.000Z",
    "category": [
      "自动化工具"
    ],
    "tag": [
      "Ansible"
    ],
    "summary": "4.5 Playbook之tags 1 简介 在大型项目当中，通常一个playbook会有非常多的task。而我们每次执行这个playbook时，都会将所有task运行一遍。而事实上，在实际使用过程中，我们可能只是想要执行其中的一部分任务而已，并不想把整个playbook完整跑一遍。这个时候就需要用到tags。 通过tags，我们可以给playbook中的某",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/automate/ansible/playbook-tags.html"
        }
      ],
      [
        "meta",
        {
          "property": "og:site_name",
          "content": "SRE运维进阶之路"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "4.5 Playbook之tags"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "article"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "zh-CN"
        }
      ],
      [
        "meta",
        {
          "property": "article:tag",
          "content": "Ansible"
        }
      ],
      [
        "meta",
        {
          "property": "article:published_time",
          "content": "2020-03-20T00:00:00.000Z"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "1 简介",
      "slug": "_1-简介",
      "children": []
    },
    {
      "level": 2,
      "title": "2 为task打tag",
      "slug": "_2-为task打tag",
      "children": []
    },
    {
      "level": 2,
      "title": "3 使用tag",
      "slug": "_3-使用tag",
      "children": [
        {
          "level": 3,
          "title": "3.1 执行指定tag的task",
          "slug": "_3-1-执行指定tag的task",
          "children": []
        },
        {
          "level": 3,
          "title": "3.2 排除指定tag的task",
          "slug": "_3-2-排除指定tag的task",
          "children": []
        },
        {
          "level": 3,
          "title": "3.3 查看playbook中的所有tag",
          "slug": "_3-3-查看playbook中的所有tag",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "4 打tag的几种方式",
      "slug": "_4-打tag的几种方式",
      "children": []
    },
    {
      "level": 2,
      "title": "5 ansible内置tag",
      "slug": "_5-ansible内置tag",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 3.62,
    "words": 1085
  },
  "filePathRelative": "automate/ansible/playbook-tags.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
