import React from 'react';
import Layout from './src/components/Layout';
import { onRenderBody } from "./gatsby-ssr";

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{onRenderBody, element}</Layout>;
}