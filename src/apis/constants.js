const v1 = 'api/v1'
const END_POINT = {
  ARTICLES: {
    LIST: `${v1}/blogs`,
    DETAIL: ({ blogId }) => `${v1}/blogs/${blogId}`,
    CREATE: `${v1}/blogs`,
    UPDATE: ({ blogId }) => `${v1}/blogs/${blogId}`
  }
}

export default END_POINT
