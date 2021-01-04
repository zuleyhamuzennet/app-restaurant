package com.ba.restaurant.config;

import com.ba.restaurant.auth.UserDetailsServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Bean
    public UserDetailsService userDetailsService() {
        return new UserDetailsServiceImpl();
    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
        authenticationProvider.setUserDetailsService(userDetailsService());
        authenticationProvider.setPasswordEncoder(passwordEncoder());
        return authenticationProvider;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests().antMatchers("login/**").permitAll();
        http.authorizeRequests().antMatchers("h2-console/**").permitAll();
       // http.authorizeRequests().antMatchers("3306/**").permitAll();
        http.authorizeRequests().antMatchers("swagger-ui.html#/**").permitAll();
        http.csrf().disable();
        http.headers().frameOptions().disable();
        http.authorizeRequests().antMatchers("/product/add").access("hasAnyRole('USER','ADMIN')");
        http.authorizeRequests().antMatchers("/product/update/").access("hasRole('ADMIN')");
        http.authorizeRequests().antMatchers("/product/delete/{id}").access("hasRole('ADMIN')");
        http.authorizeRequests().antMatchers("/product/{id}").access("hasAnyRole('USER','ADMIN')");
        http.authorizeRequests().antMatchers("/product/list").access("hasAnyRole('USER','ADMIN')");

        http.authorizeRequests().antMatchers("/carts/**").hasAnyRole("USER", "ADMIN");
        http.authorizeRequests().antMatchers("/categories/**").hasAnyRole("USER", "ADMIN");
        http.authorizeRequests().antMatchers("/properties/**").hasAnyRole("USER", "ADMIN");
        http.authorizeRequests().antMatchers("/waiter/**").hasAnyRole("USER", "ADMIN");
        http.authorizeRequests().antMatchers("/table-category/**").hasAnyRole("USER", "ADMIN");
        http.authorizeRequests().antMatchers("/users/**").hasAnyRole("USER", "ADMIN");
        http.authorizeRequests().antMatchers("/customer/**").hasAnyRole("USER", "ADMIN");

        // http.authorizeRequests().antMatchers("/login/**").hasAnyRole("USER","ADMIN");
        // http.authorizeRequests().antMatchers("/media/**").hasAnyRole("USER","ADMIN");

        http.httpBasic();
        http.cors();
    }

}