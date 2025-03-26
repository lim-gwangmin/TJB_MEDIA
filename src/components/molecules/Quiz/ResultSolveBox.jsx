import { Box } from '@components/atoms/Box';
import { Text } from '@components/atoms/Text';

import { StyledAnswerBox, StyledCountPoint, StyledSolveBox } from './ResultSolveBox.styled';

export default function ResultSolveBox({ resultData }) {
  return (
    <>
      {resultData &&
        resultData.map((data, index) => (
          <Box key={index} style={{ border: '1px solid #EDEDEF', marginTop: '1rem' }}>
            <StyledCountPoint>{index + 1}번 문제</StyledCountPoint>
            <Text size={15} color="2E3233" weight={600} style={{ lineHeight: 1.3 }}>
              {data.quiz}
            </Text>
            <StyledAnswerBox rightFl={data.rightFl}>
              {data.rightFl === 1 ? '정' : '오'}답 : {data.answer}
            </StyledAnswerBox>
            {data.rightFl === 0 && (
              <StyledSolveBox rightFl={1}>정답 : {data.rightAnswer}</StyledSolveBox>
            )}
          </Box>
        ))}
    </>
  );
}
