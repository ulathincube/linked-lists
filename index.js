function createNode(value = null, nextNode = null) {
  return { value, nextNode };
}

function createLinkedList() {
  const headNode = {};

  const append = value => {
    const newNode = createNode(value);

    if (!headNode.value) {
      headNode.value = newNode;
    } else {
      let currentNode = headNode;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
    }
  };

  const prepend = value => {
    const newNode = createNode(value);

    if (!headNode.value) {
      headNode.value = newNode;
    } else {
      let currentNode = headNode;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
    }
  };

  const size = () => {};

  const head = () => {};

  const tail = () => {};

  const at = index => {};

  const pop = () => {};

  const containsValue = () => {};

  const find = value => {};

  const toString = () => {};

  return { append, prepend };
}

const list = createLinkedList();

console.log(list.append('house'));
