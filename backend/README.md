# Backend - Ruby on Rails

이 디렉토리는 Ruby on Rails 기반 백엔드 서버입니다.

## 프로젝트 설명
- 사용자 인증, 데이터 관리, API 제공 등의 핵심 기능을 담당합니다.
- 프론트엔드(Next.js)와 통신하여 전체 애플리케이션을 지원합니다.

## 실행 방법
```bash
# 필요한 gem 설치
bundle install

# 데이터베이스 설정
rails db:create
rails db:migrate

# 서버 실행
rails s
