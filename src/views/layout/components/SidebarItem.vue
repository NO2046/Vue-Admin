/* eslint-disable no-unreachable */
<template>
  <div v-if="!item.hidden && item.children" class="sidebar-item-container">
    <template v-if="hasOneShowingChild(item.children)">
      <item-link :to="resolvePath(onlyOneChild.path)" :key="onlyOneChild.path">
        <el-menu-item :index="resolvePath(onlyOneChild.path)">
          <item-title :title="onlyOneChild.meta.title" :icon="onlyOneChild.meta.icon" />
        </el-menu-item>
      </item-link>
    </template>
    <el-submenu v-else :index="resolvePath(item.path)">
      <template slot="title">
        <item-title :title="item.meta.title" :icon="item.meta.icon" />
      </template>
      <template v-for="child in item.children">
        <sidebar-item v-if="child.children" :item="child" :base-path="child.path" :key="child.path" />
        <item-link v-else :to="resolvePath(child.path)" :key="child.path">
          <el-menu-item :index="resolvePath(child.path)">
            <item-title :title="child.meta.title" :icon="child.meta.icon" />
          </el-menu-item>
        </item-link>
      </template>
    </el-submenu>
  </div>
</template>

<script>
import path from 'path';
import ItemLink from './SidebarItemLink';
import ItemTitle from './SidebarItemTitle';
import { isOuterLink } from '@/utils/index';

export default {
  name: 'SidebarItem',
  components: { ItemLink, ItemTitle },
  data() {
    return {
      onlyOneChild: null,
    };
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    basePath: {
      type: String,
    },
  },
  methods: {
    hasOneShowingChild(children) {
      const showingChidren = children.filter(item => {
        if (item.hidden) {
          return false;
        } else {
          this.onlyOneChild = item;
          return true;
        }
      });
      if (showingChidren.length === 1) {
        return true;
      }
      return false;
    },
    resolvePath(routePath) {
      if (isOuterLink(routePath)) {
        return routePath;
      }
      return path.resolve(this.basePath, routePath);
    },
  },
};
</script>