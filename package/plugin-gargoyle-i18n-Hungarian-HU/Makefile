include $(TOPDIR)/rules.mk

PKG_NAME:=plugin-gargoyle-i18n-Hungarian-HU
PKG_VERSION:=1.0.0
PKG_RELEASE:=1

PKG_BUILD_DIR:=$(BUILD_DIR)/$(PKG_NAME)-$(PKG_VERSION)

include $(INCLUDE_DIR)/package.mk

define Package/plugin-gargoyle-i18n-Hungarian-HU
	SECTION:=admin
	CATEGORY:=Administration
	SUBMENU:=Gargoyle Web Interface
	TITLE:=Hungarian-HU language for Gargoyle interface
	MAINTAINER:=BashfulBladder
	DEPENDS:=+gargoyle
	PKGARCH:=all
endef

define Package/plugin-gargoyle-i18n-Hungarian-HU/description
	Hungarian-HU language strings for Gargoyle web interface
endef

define Build/Prepare
endef

define Build/Configure
endef

define Build/Compile
endef

define Package/plugin-gargoyle-i18n-Hungarian-HU/postinst
	if [ -z "$${IPKG_INSTROOT}" ] ; then
		. /usr/lib/gargoyle/i18nServices.sh
		restart_lang_services
	fi
endef

define Package/plugin-gargoyle-i18n-Hungarian-HU/postrm
	if [ -z "$${IPKG_INSTROOT}" ] ; then
		IFS=$$(echo -en "\n\b")
		webroot=$$(uci get gargoyle.global.web_root)
		for d in `find "$$webroot/i18n/" -type d` ; do
			if [ -d "$$d" ] ; then
				contents=$$(ls "$$d")
				if [ -z "$$contents" ] ; then
					rmdir -p "$$d" 2>/dev/null
				fi
			fi
		done
		. /usr/lib/gargoyle/i18nServices.sh
		restart_lang_services
	fi
endef

define Package/plugin-gargoyle-i18n-Hungarian-HU/install
	$(INSTALL_DIR) $(1)
	$(CP) ./files/* $(1)/
endef

$(eval $(call BuildPackage,plugin-gargoyle-i18n-Hungarian-HU))
