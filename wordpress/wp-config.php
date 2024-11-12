<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'W{PQm0`fG%5Pat1WJv(JJ&j]&VtDwPT*3g2.tEQDk;q$)QAbegHZHDxL+FUut4=b' );
define( 'SECURE_AUTH_KEY',  '|z*MlFh5Nv[^bbviG}h|_G>e,QlOwQ8_>`j<?fvG0t#wOpvDc&J8oaz7D)9+4C)U' );
define( 'LOGGED_IN_KEY',    'g$2^@D[r6d_=*G3J=<!;LhHNmS;ezo|:_*YDuLdN8.S@K_/5JOlmaK5;&A*98nfN' );
define( 'NONCE_KEY',        'i65AK@1*8P/C#4{{Q /QzK#uy9@Of7FL8iHyf*&?|y2 T/ *BpY9E&CG:$=l/!z)' );
define( 'AUTH_SALT',        'N+PnLxjYwAuCY:,~@vwqtRXBpvH)5dlF*O-9<<(UCT3xTxu%*8U3BeE7k<!<eL[Z' );
define( 'SECURE_AUTH_SALT', ';!q(uA(:gQ_EsQbWTHQRFN~8Fi=uWFj-C2^$6|3h*NSZIRh]nRgx#8$gIj:zTIk-' );
define( 'LOGGED_IN_SALT',   'at;(uYaLmTZl`_GqN%kut>Vm(D<w^&zy5VtA]qMc@Ve1Lou%a)Oy3>.eeEMVQ^+o' );
define( 'NONCE_SALT',       '@&<@2P3m%y7UEl>s9)6i^0HUUZ*@O-(+BQb}O+kREZ*lHZBiM/}]u6q+ Mp5b,Dm' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
