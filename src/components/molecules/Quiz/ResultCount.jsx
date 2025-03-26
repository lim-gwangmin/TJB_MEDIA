import { Box } from '@components/atoms/Box';
import { CircularGauge } from '@components/atoms/Gauge';
import { Text } from '@components/atoms/Text';
import { Title } from '@components/atoms/Title';
import { CardCenterWrapper } from '@components/molecules/Card/Card.styled';
import { SpaceBetweenTitle } from '@components/molecules/Title';

export default function ResultCount({ percentage = 0, correctCount = 0, incorrectCount = 0 }) {
  return (
    <Box shadow={true}>
      <SpaceBetweenTitle icon={false}>
        <Title size={20} color="#9B9798">
          결과
        </Title>
      </SpaceBetweenTitle>
      <CardCenterWrapper>
        <CircularGauge
          value={percentage}
          maxValue={100}
          strokeWidth={12}
          size={160}
          color="#ff5722"
        />
      </CardCenterWrapper>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          marginTop: '5rem',
        }}
      >
        <Box bgColor="#FFF9DB" style={{ flex: 1 }}>
          <Text weight={500} color="#9B9798" align="center" style={{ marginBottom: '0.6rem' }}>
            내가 맞춘 정답
          </Text>
          <Text size={20} weight={600} color="#FF881B" align="center">
            {correctCount}개
          </Text>
        </Box>
        <Box bgColor="#FFF9DB" style={{ flex: 1 }}>
          <Text weight={500} color="#9B9798" align="center" style={{ marginBottom: '0.6rem' }}>
            내가 틀린 오답
          </Text>
          <Text size={20} weight={600} color="#000000" align="center">
            {incorrectCount}개
          </Text>
        </Box>
      </div>
    </Box>
  );
}
