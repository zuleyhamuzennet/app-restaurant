insert into USERS(id,email,username,password,enabled) values (1,'aa@bb.cc','admin','$2y$12$YxZHLb5Pcp6XCL/BFqOyluxDi5DmX6pBeettiN7n.3.Y3ldv203ge',1);

INSERT INTO ROLES(id,name)
values(1,'ROLE_USER'),
(2,'ROLE_ADMIN');

insert into TBL_USER_ROLES(user_id,role_id) values (1,1);