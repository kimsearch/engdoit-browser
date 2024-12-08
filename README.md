# 영단어 학습 앱 (English Word Learning App)

## 프로젝트 소개 (Project Introduction)

이 프로젝트는 사용자가 영어 단어를 학습할 수 있는 인터랙티브한 웹 애플리케이션입니다. 다양한 난이도의 단어를 제공하며, 사용자는 자신의 수준에 맞는 학습을 진행할 수 있습니다.

This project is an interactive web application that allows users to learn English words. It provides words of various difficulty levels, allowing users to study according to their proficiency.

## 주요 기능 (Key Features)

1. 5개의 난이도 레벨 (5 difficulty levels)
2. 각 난이도별 5개의 단어 제공 (5 words for each difficulty level)
3. 타이머 기능 (Timer function)
4. 즉각적인 정답 피드백 (Immediate answer feedback)
5. 학습 결과 제공 (Learning results provided)
6. 북마크 기능 (Bookmark feature)

## 기술 스택 (Tech Stack)

- React
- Next.js
- TypeScript
- Tailwind CSS

## 설치 방법 (Installation)

1. 저장소를 클론합니다:
   Clone the repository:

   ```
   git clone https://github.com/your-username/english-word-learning-app.git
   ```

2. 프로젝트 디렉토리로 이동합니다:
   Navigate to the project directory:

   ```
   cd english-word-learning-app
   ```

3. 필요한 패키지를 설치합니다:
   Install the necessary packages:

   ```
   npm install
   ```

4. 개발 서버를 실행합니다:
   Run the development server:

   ```
   npm run dev
   ```

5. 브라우저에서 `http://localhost:3000`을 열어 앱을 확인합니다.
   Open `http://localhost:3000` in your browser to view the app.

## 사용 방법 (How to Use)

1. 홈 화면에서 원하는 난이도를 선택합니다.
   Select the desired difficulty level from the home screen.

2. 주어진 한국어 단어에 대응하는 영어 단어를 4개의 보기 중에서 선택합니다.
   Choose the corresponding English word from the four options given for the Korean word.

3. 각 문제는 2초의 제한 시간이 있으며, 시간 내에 답을 선택하지 않으면 자동으로 다음 문제로 넘어갑니다.
   Each question has a 2-second time limit. If you don't select an answer within the time limit, it automatically moves to the next question.

4. 답을 선택하면 즉시 정답 여부를 확인할 수 있습니다.
   You can immediately see if your answer is correct or not after selection.

5. 모든 문제를 풀면 최종 결과를 확인할 수 있습니다.
   After answering all questions, you can check your final results.

6. '다시보기' 버튼을 눌러 같은 난이도의 퀴즈를 다시 풀거나, '홈으로' 버튼을 눌러 메인 화면으로 돌아갈 수 있습니다.
   You can retake the quiz at the same difficulty level by pressing the 'Review' button, or return to the main screen by pressing the 'Home' button.


Git 명령어 정리

코드 업로드

git pull origin main (충돌 시 git stash, git pull origin main, git stash apply)
git add . 
git commit -m 'commit message'
git push origin sh

GitHub 에서 sh -> main 으로 merge