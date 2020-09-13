
export const useResource = () => {
  return {
    posts: wrapPromise(fetchPosts()),
    users: wrapPromise(fetchUsers())
  }
}

function wrapPromise<T extends any>(promise: Promise<T>) {
  let status = 'pending';
  let result: T;
  let error: Error;
  const suspender = promise.then(
    (r) => {
      result = r;
      status = 'success';
    },
    (err) => {
      error = err;
      status = 'error';
    }
  );

  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw error;
      } else {
        return result;
      }
    }
  }
}

function fetchPosts(): Promise<Record<string, any>[]> {
  return fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    .then((r) => r.json())
    .catch((err) => {
      console.warn(err);
      throw err;
    })
}

function fetchUsers(): Promise<Record<string, any>[]> {
  return fetch('https://jsonplaceholder.typicode.com/users?_limit=5')
    .then((r) => r.json())
    .catch((err) => {
      console.warn(err);
      throw err;
    })
}
