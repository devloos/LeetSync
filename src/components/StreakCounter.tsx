import { Heading, HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiFillCheckCircle, AiFillCloseCircle, AiTwotoneCheckCircle } from 'react-icons/ai';

interface StreakCounterProps {
  problemsPerDay?: { [date: string]: number };
}

const DAYS_OF_WEEK = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const StreakCounter: React.FC<StreakCounterProps> = ({ problemsPerDay }) => {
  const [streak, setStreak] = React.useState([false, false, false, false, false]);

  React.useEffect(() => {
    setStreak([false, false, true, true, false]);
  }, []);

  return (
    <HStack>
      {DAYS_OF_WEEK.map((day, idx) => {
        const date = new Date(Date.now() - 86400000 * idx);

        return (
          <VStack key={idx}>
            <Heading size="md" color="gray.400" fontWeight={'semibold'}>
              {day}
            </Heading>

            {problemsPerDay?.[date.toLocaleDateString()] ? (
              <AiFillCheckCircle size={'50px'} color="#FCC34A" />
            ) : idx === streak.length - 1 ? (
              <AiTwotoneCheckCircle size={'50px'} color="#E8E4E4" />
            ) : (
              <AiFillCloseCircle size={'50px'} color="#E8E4E4" />
            )}
          </VStack>
        );
      })}
    </HStack>
  );
};
export default StreakCounter;
