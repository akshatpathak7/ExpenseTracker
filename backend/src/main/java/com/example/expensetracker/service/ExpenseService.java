package com.example.expensetracker.service;

import com.example.expensetracker.model.Expense;
import com.example.expensetracker.repository.ExpenseRepository;
import java.math.BigDecimal;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class ExpenseService {

    private final ExpenseRepository repository;

    // Constructor injection: Spring passes in the repository bean.
    public ExpenseService(ExpenseRepository repository) {
        this.repository = repository;
    }

    // Returns all expenses, or only those in a category when one is given.
    public List<Expense> getExpenses(String category) {
        if (category == null || category.isBlank()) {
            return repository.findAll();
        }
        return repository.findByCategory(category);
    }

    public Expense add(Expense expense) {
        return repository.save(expense);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    // Total spending calculation: sum the amounts of the matching expenses.
    public BigDecimal getTotal(String category) {
        return getExpenses(category).stream()
                .map(Expense::getAmount)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
    }
}
