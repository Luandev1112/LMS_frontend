<template>
  <nav class="flex bg-white border-b border-gray-200" aria-label="Breadcrumb">
    <ol
      vocab="http://schema.org/"
      typeof="BreadcrumbList"
      class="flex w-full px-4 mx-12 space-x-4 sm:px-6 lg:px-2"
    >
      <li property="itemListElement" typeof="ListItem" class="flex">
        <div class="flex items-center">
          <NLink
            property="item"
            typeof="WebPage"
            to="/dashboard"
            class="ml-4 text-sm text-gray-500 hover:text-gray-700"
          >
            <svg
              class="flex-shrink-0 w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
              />
            </svg>
            <span class="sr-only" property="name">Bijlesnodig</span>
          </NLink>
          <meta property="position" content="1" />
        </div>
      </li>
      <li
        v-for="(crumb, index) in crumbs"
        :key="index"
        property="itemListElement"
        typeof="ListItem"
        class="flex"
      >
        <div class="flex items-center">
          <svg
            class="flex-shrink-0 w-6 h-full text-gray-200"
            viewBox="0 0 24 44"
            preserveAspectRatio="none"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
          </svg>
          <NLink
            property="item"
            typeof="WebPage"
            :to="crumb.path"
            class="ml-4 text-sm text-gray-500 hover:text-gray-700"
          >
            <span property="name">{{
              $route.fullPath === crumb.path && title !== null
                ? title
                : crumb.title
            }}</span>
          </NLink>
          <meta property="position" :content="index + 2" />
        </div>
      </li>
    </ol>
  </nav>
</template>

<script>
const titleCase = require('ap-style-title-case')

export default {
  props: {
    title: {
      type: String,
      default: null,
    },
  },

  computed: {
    crumbs() {
      const fullPath = this.$route.fullPath
      const params = fullPath.startsWith('/')
        ? fullPath.substring(1).split('/')
        : fullPath.split('/')
      const crumbs = []

      let path = ''

      params.forEach((param, index) => {
        path = `${path}/${param}`
        const match = this.$router.match(path)
        if (match.name !== null) {
          crumbs.push({
            title: titleCase(param.replace(/-/g, ' ')),
            ...match,
          })
        }
      })

      return crumbs
    },
  },
}
</script>

<style></style>
