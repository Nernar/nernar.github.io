/**
 * Module that can be used to localize mods.
 * All default strings (e.g. item names, windows titles, etc.) in the mod should 
 * be in English. Add translations to these strings using
 * {@link Translation.addTranslation}. For items and blocks translations are applied 
 * automatically. For the other strings, use {@link Translation.translate}.
 */
declare namespace Translation {
    /**
     * Adds translations for specified object in several languages.
     * @param name default string in English or name key
     * @param localization object containing two-letter language codes as keys
     * and localized strings in the specified language as values
     */
    function addTranslation(name: string, localization: { [language: string]: string }): void;

    /**
     * Translates string from English to current game language (if available).
     * Add translations via {@link Translation.addTranslation} to apply them.
     * @param name default string in English or name key
     * @returns String in the current game language or input string if 
     * translation is not available.
     */
    function translate(name: string): string;

    /**
     * @returns Two-letter language code for current game language.
     */
    function getLanguage(): string;
}
