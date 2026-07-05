package com.example.expensetracker.repository;

import com.example.expensetracker.model.Expense;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

// Spring Data JPA generates the implementation at runtime.
// JpaRepository already provides findAll, save, deleteById, etc.
public interface ExpenseRepository extends JpaRepository<Expense, Long> {

    // Derived query: Spring builds the SQL from the method name.
    List<Expense> findByCategory(String category);
}
