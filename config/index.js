import Posts from 'containers/Posts/connector';

export const tabs = [
  { title: 'Problems', content: <Posts type={'problems'} /> },
  { title: 'Passages', content: <Posts type={'passages'} /> },
  { title: 'Lessons', content: <Posts type={'lessons'} /> },
];
