package com.ba.restaurant.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import javax.sql.DataSource;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private DataSource dataSource;

    @Override
    protected void configure(HttpSecurity http)throws Exception{

        http.authorizeRequests().antMatchers("h2-console/**").permitAll();
        http.csrf().disable();
        http.headers().frameOptions().disable();
        http.authorizeRequests().antMatchers("/users/user").access("hasAnyRole('USER','ADMIN')");
        http.authorizeRequests().antMatchers("/users/list").access("hasAnyRole('USER','ADMIN')");
        http.authorizeRequests().antMatchers("/users/{id}").access("hasAnyRole('USER','ADMIN')");
        http.authorizeRequests().antMatchers("/users/add").access("hasRole('ADMIN')");
        http.authorizeRequests().antMatchers("/users/delete/{id}").access("hasRole('ADMIN')");
        http.authorizeRequests().antMatchers("/users/update/{id}").access("hasAnyRole('USER','ADMIN')");
        http.authorizeRequests().antMatchers("/product/add").access("hasAnyRole('USER','ADMIN')");
        http.authorizeRequests().antMatchers("/product/update/").access("hasRole('ADMIN')");
        http.authorizeRequests().antMatchers("/product/delete/{id}").access("hasRole('ADMIN')");
        http.authorizeRequests().antMatchers("/product/{id}").access("hasAnyRole('USER','ADMIN')");
        http.authorizeRequests().antMatchers("/product/list").access("hasAnyRole('USER','ADMIN')");

        http.authorizeRequests().antMatchers("/carts/**").hasRole("ADMIN");
        http.authorizeRequests().antMatchers("/categories/**").hasAnyRole("USER","ADMIN");
        http.authorizeRequests().antMatchers("/properties/**").hasAnyRole("USER","ADMIN");
        http.authorizeRequests().antMatchers("/table/**").hasAnyRole("USER","ADMIN");
        http.authorizeRequests().antMatchers("/table-category/**").hasAnyRole("USER","ADMIN");

        http.httpBasic();
        http.cors();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth)throws Exception{
        auth.jdbcAuthentication().dataSource(dataSource);
    }

}