import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetingsThunk } from '../redux/slices/greetingsSlice';

const Greeting = () => {
  const greeting = useSelector((state) => state.greetings.greetings);
  console.log(greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetingsThunk())
      .then(() => {
        console.log('Greeting fetched successfully');
      })
      .catch((error) => {
        console.error('Error fetching greeting:', error);
      });
  }, [dispatch]);
  

  return (
    <>
      <h1>I greet you</h1>
      <p>{greeting}</p>
    </>
  );
};

export default Greeting;