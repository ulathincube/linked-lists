function createNode(value = null, next = null) {
  return { value, next };
}

function createLinkedList() {
  let headNode = null;

  const append = value => {
    const newNode = createNode(value);

    if (!headNode) {
      headNode = newNode;
      return;
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

    // create a new node
    // if no head. make this node the head.
    // if there is a head,
    // let current = head;
    // while(current.next) current = current.next
    //

    if (!headNode) {
      headNode = newNode;
      return;
    } else {
      const oldNodes = headNode;
      headNode = newNode;
      headNode.next = oldNodes;
    }
  };

  const size = () => {
    if (!headNode) {
      return 0;
    }
    let currentNode = headNode;
    let count = 1;

    while (currentNode.next) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  };

  const head = () => {
    if (!headNode) return null;
    return headNode;
  };

  const tail = () => {
    if (!headNode) return null;

    let currentNode = headNode;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    return currentNode;
  };

  const at = index => {
    let currentNode = headNode;
    let countIndex = 0;

    while (currentNode.next) {
      if (countIndex === index) {
        return currentNode;
      }

      countIndex++;
      currentNode = currentNode.next;
    }
  };

  const pop = () => {
    if (!headNode) return null;

    let currentNode = headNode;
    let previousNode;

    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    currentNode = null;
    previousNode.next = currentNode;
  };

  const containsValue = value => {
    if (!headNode) return null;

    let currentNode = headNode;

    while (currentNode.next) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }

    return false;
  };

  const find = value => {
    if (!headNode) return null;

    let currentNode = headNode;
    let index = 0;

    while (currentNode) {
      if (currentNode.value === value) {
        return index;
      }

      currentNode = currentNode.next;
      if (!currentNode) return null;
      index++;
    }
  };

  const toString = () => {
    if (!headNode) return null;
    let currentNode = headNode;
    let values = [];

    while (currentNode) {
      values.push(`( ${currentNode.value} )`);
      currentNode = currentNode.next;
      if (!currentNode) values.push('null');
    }

    const string = values.join(' -> ');

    return string;
  };

  return {
    append,
    prepend,
    toString,
    size,
    head,
    tail,
    at,
    pop,
    containsValue,
    find,
  };
}
