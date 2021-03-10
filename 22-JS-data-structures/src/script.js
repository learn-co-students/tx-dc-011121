// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed

// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  constructor() {
    //initialize data here
    this.data = []
  }

  add(record){
    this.data.unshift(record)
  }

  remove(){
    return this.data.pop()
  }
  
  peek(){
    return this.data[this.data.length -1]
  }


}

// --- Directions
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alternating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
  //  const queueOne = new Queue();
  //  queueOne.add(1);
  //  queueOne.add(2);
  //  const queueTwo = new Queue();
  //  queueTwo.add('Hi');
  //  queueTwo.add('There');
  //  const q = weave(queueOne, queueTwo);
  //  q.remove() // 1
  //  q.remove() // 'Hi'
  //  q.remove() // 2
  //  q.remove() // 'There'

function weave(sourceOne, sourceTwo) {
  const newQue = new Queue()

  while(sourceOne.peek() || sourceTwo.peek()){
    if(sourceOne.peek()){
      newQue.add(sourceOne.remove())
    }
    if(sourceTwo.peek()){
      newQue.add(sourceTwo.remove())
    }
  }

  return newQue

}