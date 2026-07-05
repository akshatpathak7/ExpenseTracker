package com.example.expensetracker;

import com.example.expensetracker.model.Expense;
import com.example.expensetracker.repository.ExpenseRepository;
import java.math.BigDecimal;
import java.time.LocalDate;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ExpenseTrackerApplication {

    public static void main(String[] args) {
        SpringApplication.run(ExpenseTrackerApplication.class, args);
    }

    // Seeds a few expenses on startup so the UI is not empty on first load.
    @Bean
    CommandLineRunner seedData(ExpenseRepository repository) {
        return args -> {
            repository.save(new Expense("Groceries", new BigDecimal("54.20"), "Food", LocalDate.now().minusDays(2)));
            repository.save(new Expense("Bus pass", new BigDecimal("30.00"), "Transport", LocalDate.now().minusDays(1)));
            repository.save(new Expense("Electricity bill", new BigDecimal("75.50"), "Bills", LocalDate.now().minusDays(5)));
            repository.save(new Expense("New headphones", new BigDecimal("120.00"), "Shopping", LocalDate.now()));
        };
    }
}
