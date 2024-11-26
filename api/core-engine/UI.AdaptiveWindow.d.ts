declare namespace UI {
	class AdaptiveWindow extends WindowGroup {
        /**
	     * Constructs new {@link UI.AdaptiveWindow} with specified content.
	     * @param content object containing window description
	     */
        constructor(content: WindowContent);
        /**
	     * Constructs a new empty {@link UI.AdaptiveWindow}.
	     */
        constructor();
		setContent(content: WindowContent): void;
		/**
		 * Sets style profile for the current {@link UI.AdaptiveWindow}.
		 * @param profile 0 for classic profile, 1 for default profile
		 */
		setProfile(profile: 0 | 1): void;
		/**
		 * Forces {@link UI.AdaptiveWindow} to be displayed using some profile.
		 * @param profile 0 for classic profile, 1 for default profile or -1 not
		 * to force any profile. By default forced profile is -1
		 */
		setForcedProfile(profile: 0 | 1): void;
		open(): void;
	}
}
