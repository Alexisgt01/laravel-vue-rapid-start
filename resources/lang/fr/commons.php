<?php
// cat|cats -> in js : this.__('commons.error.require').split('|')[0] or plu. [1]
// :name -> in js : this.__('commons.error.maxLength').replace(':name', foo)
return [
    'form' => [
        'email'            => 'Adresse email',
        'username'         => "Nom d'utilisateur",
        'society'          => "Nom de l'entreprise",
        'password'         => 'Mot de passe',
        'password_confirm' => 'Confirmation du mot de passe',
        'submit'           => 'Valider',
        'name'             => 'Nom et prénom',
        'phone'            => 'Numéro de téléphone',
        'address'          => 'Adresse',
        'postal_code'      => 'Code postal',
        'city'             => 'Ville',
        'reset'            => 'Réinitialiser',
        'close'            => 'Fermer',
        'search'           => 'Rechercher',
        'per_page'         => 'Nombre par page',

        // form validation
        'validation'       => [
            'email'       => "Ce n'est pas une adresse email",
            'require'     => "Ce champ est obligatoire",
            'passwordMin' => "Le mot de passe doit minimun contenir :nb caractères",
            'emailUnique' => "Cette adresse email est déjà enregistré en base de données",
            'max'         => 'Ce champs doit contenir maximun :nb charactéres',
            'min'         => 'Ce champs doit contenir au minimun :nb charactéres',
            'boxMax'      => 'Au maximun :nb options sont autorisés',
            'boxMin'      => 'Un minimum de :nb options sont requisent',
            'phone'       => "Le numéro de téléphone n'est pas valide",
            'postal_code' => "Le code postal n'est pas valide",
            'file'        => "Ce type de fichier n'est pas acceptés",
            'fileType'    => "La réponse attendus doit etre un ficher",
            'fileMax'     => "La taille du fichier ne doit pas dépasser :nb Ko",
            'boolean'     => "Le champs attendus n'est pas compréhensible",
        ]
    ],

    'response' => [
        'success' => [
            'logout' => 'Déconnexion...'
        ],

        'error' => [
            'token' => "Le jeton à expiré ou n'est pas valide",
            'login' => "L'adresse email et le mot de passe ne correspond pas",
        ],
    ],

    'navigation' => [
        'dashboard' => 'Dashboard',
        'tickets'   => 'Tickets',
        'users'     => 'Utilisateurs',
        'clients'   => 'Clients',
        'logout'    => "Se déconnecter",
    ]
];
