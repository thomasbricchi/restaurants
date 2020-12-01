package com.thomas.businesslist.domain;

import com.sun.istack.NotNull;
import lombok.Data;

import javax.persistence.*;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "Resturant")
@Data
public class Restaurant implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "NAME", nullable = false)
    private String name;

    @NotNull
    @Column(name = "ADDRESS", nullable = false)
    private String address;

    @OneToMany(
        mappedBy = "resturant",
        cascade = CascadeType.ALL,
        orphanRemoval = true
    )
    private List<Day> days = new ArrayList<>();


    public void addDay(Day day) {
        days.add(day);
        day.setResturant(this);
    }

    public void removeDay(Day day) {
        days.remove(day);
        day.setResturant(null);
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Restaurant attachment = (Restaurant) o;
        if (attachment.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), attachment.getId());
    }

    @Override
    public int hashCode() {
        return 17;
    }
}
