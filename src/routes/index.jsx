import React from 'react'
import {
  Switch
} from 'react-router-dom'
import PublicRoute from '../components/route/publicRoute'
import HomeScreen from '../modules/home'
import BlogDetailScreen from '../modules/home/components/DetailArticles'
import BlogEditScreen from '../modules/home/components/EditArticles'
import BlogAddScreen from '../modules/home/components/AddArticles'
import PageNotFound from '../modules/page-not-fount'

export default function AppRoutes() {
  return (
    <Switch>
      <PublicRoute exact path="/" component={HomeScreen} />
      <PublicRoute exact path="/blog/detail/:id" component={BlogDetailScreen} />
      <PublicRoute exact path="/blog/edit/:id" component={BlogEditScreen} />
      <PublicRoute exact path="/blog/add" component={BlogAddScreen} />
      <PublicRoute path="*" component={PageNotFound} />
    </Switch>
  )
}
