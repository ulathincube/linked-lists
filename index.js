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
    return headNode.value;
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

  const containsValue = value => {};

  const find = value => {};

  const toString = () => {
    return headNode;
  };

  return { append, prepend, toString, size, head, tail, at, pop };
}

const list = createLinkedList();

list.append('google.com');
list.append('facebook.com');
list.prepend('whatsapp.com');
console.log(list.toString());
list.pop();
console.log(list.toString());
// console.log(list.size());

// console.log(list.head());
// console.log(list.tail());
