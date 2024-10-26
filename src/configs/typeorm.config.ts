import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  //host: 'localhost' // local
  host: 'mysql',  // MySQL 컨테이너 이름과 동일
  port: 3306,
  username: 'root',  // Docker Compose의 MYSQL_USER와 일치
  password: 'adminIsCanbbu',  // Docker Compose의 MYSQL_ROOT_PASSWORD와 일치
  database: 'board-app',  // Docker Compose의 MYSQL_DATABASE와 일치
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,  // 개발 중에는 true, 운영 시에는 false 권장
};
