export const toggleActive = (item, nodeList) => {
  nodeList.forEach(node => {
    node.classList.remove('active');
  });
  item.classList.add('active');
};
