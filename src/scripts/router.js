/**
 * =====================================================
 * ROUTER - Navigation Management
 * =====================================================
 */

class DashboardRouter {
    constructor() {
        this.currentRoute = null;
        this.history = [];
        this.init();
    }
    
    init() {
        this.setupRoutes();
        this.handleBackButton();
        console.log('🧭 Router initialized');
    }
    
    /**
     * Setup route handlers
     */
    setupRoutes() {
        // Handle all internal navigation links
        document.querySelectorAll('a[href^="/"], a[href^="./"], a[href^="../"]').forEach(link => {
            // Skip external links and anchors
            if (link.getAttribute('target') === '_blank' || 
                link.getAttribute('href').startsWith('#')) {
                return;
            }
            
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                this.navigate(href);
            });
        });
    }
    
    /**
     * Navigate to a route
     */
    navigate(path, addToHistory = true) {
        // Store current route in history
        if (addToHistory && this.currentRoute) {
            this.history.push(this.currentRoute);
        }
        
        this.currentRoute = path;
        
        // Perform navigation
        window.location.href = path;
    }
    
    /**
     * Go back to previous route
     */
    goBack() {
        if (this.history.length > 0) {
            const previousRoute = this.history.pop();
            this.navigate(previousRoute, false);
        } else {
            window.history.back();
        }
    }
    
    /**
     * Handle browser back button
     */
    handleBackButton() {
        window.addEventListener('popstate', (e) => {
            if (e.state && e.state.route) {
                this.currentRoute = e.state.route;
            }
        });
    }
    
    /**
     * Get dashboard info from URL
     */
    getDashboardInfo() {
        const path = window.location.pathname;
        const dashboardMatch = path.match(/\/dashboards\/([^\/]+)\//);
        
        if (dashboardMatch) {
            return {
                id: dashboardMatch[1],
                fullPath: path
            };
        }
        
        return null;
    }
}

// Initialize router
const router = new DashboardRouter();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DashboardRouter;
}