//👇🏻 Generates a random string
const fetchID = () => Math.random().toString(36).substring(2, 10);

//👇🏻 Nested object
let tasksList = {
  pending: {
    title: "pending",
    items: [
      {
        id: fetchID(),
        title: "Send the Figma UX to Alejo",
        comments: []
      }
    ]
  },
  ongoing: {
    title: "ongoing",
    items: [
      {
        id: fetchID(),
        title: "Review GitHub issues",
        comments: [
          {
            name: "David",
            text: "Ensure you review before merging",
            id: fetchID()
          }
        ]
      }
    ]
  },
  completed: {
    title: "completed",
    items: [
      {
        id: fetchID(),
        title: "Create Elenas Components",
        comments: [
          {
            name: "Danny",
            text: "Make sure you check the requirements",
            id: fetchID()
          }
        ]
      }
    ]
  }
};

export interface Item {
  id: number;
  title: string;
  comments: any[];
}

export interface Pending {
  title: string;
  items: Item[];
}

export interface Comment {
  name: string;
  text: string;
  id: number;
}

export interface Ongoing {
  title: string;
  items: Item[];
}

export interface Comment2 {
  name: string;
  text: string;
  id: number;
}

export interface Completed {
  title: string;
  items: Item[];
}

interface taskType {
  pending: Pending;
  ongoing: Ongoing;
  completed: Completed;
}

export { tasksList, taskType };
