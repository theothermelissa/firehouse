import { graphql, useStaticQuery } from 'gatsby'

const usePageInfo = () => {
  const { path } = useStaticQuery(
    graphql`
      query MyQuery {
        sitePage(path: {}, children: {}) {
          path
        }
      } 
    `
  )
  return path
}

export default usePageInfo
