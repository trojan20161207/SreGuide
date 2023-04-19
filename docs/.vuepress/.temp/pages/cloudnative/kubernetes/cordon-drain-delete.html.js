export const data = {
  "key": "v-805e1314",
  "path": "/cloudnative/kubernetes/cordon-drain-delete.html",
  "title": "Node节点禁止调度（平滑维护）方式 - cordon，drain，delete",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "云原生"
    ],
    "tag": [
      "Kubernetes"
    ],
    "summary": "Node节点禁止调度（平滑维护）方式 - cordon，drain，delete \" 转载自：\" cordon、drain和delete三个命令都会使node停止被调度，后期创建的pod不会继续被调度到该节点上，但操作的暴力程度却不一样。 一、cordon 停止调度（不可调度，临时从K8S集群隔离） 影响最小，只会将node标识为SchedulingDisa",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/cloudnative/kubernetes/cordon-drain-delete.html"
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
          "content": "Node节点禁止调度（平滑维护）方式 - cordon，drain，delete"
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
          "content": "Kubernetes"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "一、cordon 停止调度（不可调度，临时从K8S集群隔离）",
      "slug": "一、cordon-停止调度-不可调度-临时从k8s集群隔离",
      "children": []
    },
    {
      "level": 2,
      "title": "二、drain 驱逐节点（先不可调度，然后排干）",
      "slug": "二、drain-驱逐节点-先不可调度-然后排干",
      "children": []
    },
    {
      "level": 2,
      "title": "三、delete 删除节点",
      "slug": "三、delete-删除节点",
      "children": []
    },
    {
      "level": 2,
      "title": "四、Node节点平滑维护",
      "slug": "四、node节点平滑维护",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 5.17,
    "words": 1552
  },
  "filePathRelative": "cloudnative/kubernetes/cordon-drain-delete.md"
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
