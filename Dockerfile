# Node.js 18 버전의 이미지를 사용합니다.
FROM node:18

# 컨테이너 내 작업 디렉터리를 설정합니다.
WORKDIR /app

# package.json과 package-lock.json을 복사합니다.
COPY package*.json ./

# 의존성을 설치합니다.
RUN npm install

# 나머지 프로젝트 파일들을 복사합니다.
COPY . .

# NestJS 애플리케이션을 빌드합니다.
RUN npm run build

# 애플리케이션이 3000번 포트에서 실행되도록 합니다.
EXPOSE 3000

# 애플리케이션을 실행합니다.
CMD ["npm", "run", "start:dev"]
