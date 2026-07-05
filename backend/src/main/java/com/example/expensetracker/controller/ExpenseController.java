package com.example.expensetracker.controller;

import com.example.expensetracker.model.Expense;
import com.example.expensetracker.service.ExpenseService;
import java.math.BigDecimal;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/expenses")
public class ExpenseController {

    private final ExpenseService service;

    public ExpenseController(ExpenseService service) {
        this.service = service;
    }

    // GET /api/expenses            -> all expenses
    // GET /api/expenses?category=X -> expenses in category X
    @GetMapping
    public List<Expense> getExpenses(@RequestParam(required = false) String category) {
        return service.getExpenses(category);
    }

    // GET /api/expenses/total[?category=X] -> total spending
    @GetMapping("/total")
    public BigDecimal getTotal(@RequestParam(required = false) String category) {
        return service.getTotal(category);
    }

    // POST /api/expenses -> add a new expense from the JSON request body
    @PostMapping
    public Expense add(@RequestBody Expense expense) {
        return service.add(expense);
    }

    // DELETE /api/expenses/{id} -> delete an expense
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
