package com.thomas.restaurants.domain;

import com.sun.istack.NotNull;
import com.thomas.restaurants.domain.Restaurant;
import lombok.Data;

import javax.persistence.*;

import java.io.Serializable;
import java.time.DayOfWeek;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "Day")
@Data
public class Day implements Serializable {

    @Id
    @GeneratedValue
    private Long id;

    @NotNull
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private DayOfWeek dayOfWeek;

    @ManyToOne(fetch = FetchType.LAZY)
    private Restaurant restaurant;


    @OneToMany(
        mappedBy = "day",
        cascade = CascadeType.ALL,
        orphanRemoval = true
    )
    private List<OpenDetails> openDetails = new ArrayList<>();

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Day)) return false;
        return id != null && id.equals(((Day) o).getId());
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }

}
