<?php
/*
Plugin Name: Dispositivos Populares
Plugin URI: https://mi-tienda-hacking.local/dispositivos-populares
Description: Muestra una lista de dispositivos populares (por ventas o por calificación).
Version: 1.0.0
Author: [Tu Nombre]
Author URI: https://mi-tienda-hacking.local
License: GPL2
*/

// Registrar el shortcode [dispositivos_populares]
function mostrar_dispositivos_populares() {
    // Capturar la salida con ob_start()
    ob_start();

    // Configuración de la consulta: productos ordenados por ventas o calificación
    $args = array(
        'post_type' => 'product',
        'posts_per_page' => 10,
        'meta_key' => 'total_sales', // Cambia a '_wc_average_rating' para ordenar por calificación
        'orderby' => 'meta_value_num',
        'order' => 'DESC',
    );
    $productos = new WP_Query($args);

    if ($productos->have_posts()) {
        echo '<ul class="dispositivos-populares">';
        while ($productos->have_posts()) {
            $productos->the_post();
            global $product;
            echo '<li>';
            echo '<a href="' . get_permalink() . '">' . get_the_title() . '</a>';
            echo '<p>Precio: ' . $product->get_price_html() . '</p>';
            echo '</li>';
        }
        echo '</ul>';
        wp_reset_postdata();
    } else {
        echo '<p>No hay dispositivos populares disponibles.</p>';
    }

    // Devolver el contenido capturado
    return ob_get_clean();
}
add_shortcode('dispositivos_populares', 'mostrar_dispositivos_populares');