package com.thomas.restaurants.domain;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import java.io.Serializable;

@Entity
@Table(name = "OPEN_DETAILS")
@Data
public class OpenDetails implements Serializable {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    private Day day;

    @NotNull
    @Column(nullable = false)
    private String start;

    @NotNull
    @Column(nullable = false)
    private String end;

    @NotNull
    @Column(nullable = false)
    private TypeEnum type;


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof OpenDetails)) return false;
        return id != null && id.equals(((OpenDetails) o).getId());
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
