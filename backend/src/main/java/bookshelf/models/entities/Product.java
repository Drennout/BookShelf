package bookshelf.models.entities;

import lombok.*;
import javax.persistence.Id;
import org.springframework.stereotype.Component;

import javax.persistence.*;

/**
 * Product entity
 */
@Component
@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private int cost;
    private String img_path;
    private String description;
    private String short_description;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "maker_id")
    private Maker maker;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "product_type")
    private Product_type product_type;
}
