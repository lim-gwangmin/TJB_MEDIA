import { useState } from 'react';

// 로딩 상태를 관리하는 커스텀 훅
export function useLoading(asyncFunction) {
  const [isLoading, setIsLoading] = useState(false);

  const execute = async (...args) => {
    try {
      setIsLoading(true); // 로딩 시작
      const result = await asyncFunction(...args);
      return result;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    } finally {
      setIsLoading(false); // 로딩 종료
    }
  };

  return [isLoading, execute];
}
